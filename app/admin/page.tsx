'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import type { Project, Image } from '@/lib/types'

export default function Admin() {
  const [projects, setProjects] = useState<Project[]>([])
  const [images, setImages] = useState<Image[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState<string | null>(null)

  // Form states
  const [selectedProject, setSelectedProject] = useState('')
  const [caption, setCaption] = useState('')
  const [isCover, setIsCover] = useState(false)
  const [newProjectName, setNewProjectName] = useState('')
  const [file, setFile] = useState<File | null>(null)

  // Crop states
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{x:number;y:number;width:number;height:number}|null>(null)

  // Load data
  const load = async () => {
    try {
      const res = await fetch('/api/images')
      if (!res.ok) throw new Error('Failed to load')
      const data = await res.json()
      setProjects(data.projects || [])
      setImages(data.images || [])
    } catch (error) {
      setMsg(error instanceof Error ? error.message : 'Load failed')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  // On file select
  function onFileChange(f: File | null) {
    setFile(f)
  }

  const onCropComplete = useCallback((_area:any, areaPx:any) => {
    setCroppedAreaPixels(areaPx)
  }, [])

  function loadImage(src:string) {
    return new Promise<HTMLImageElement>((res, rej) => {
      const i = new Image()
      i.onload = () => res(i)
      i.onerror = rej
      i.src = src
    })
  }

  async function getCroppedBlob(): Promise<Blob> {
    if (!file || !croppedAreaPixels) throw new Error("No crop")
    const url = URL.createObjectURL(file)
    const img = await loadImage(url)
    const canvas = document.createElement("canvas")
    canvas.width = croppedAreaPixels.width
    canvas.height = croppedAreaPixels.height
    const ctx = canvas.getContext("2d")!
    ctx.drawImage(
      img,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0, 0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    )
    URL.revokeObjectURL(url)
    return await new Promise<Blob>((res) => canvas.toBlob(b => res(b!), "image/jpeg", 0.9)!)
  }

  // Create project
  async function createProject(e: React.FormEvent) {
    e.preventDefault()
    try {
      const res = await fetch('/api/projects/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newProjectName }),
      })
      if (!res.ok) throw new Error('Failed to create')
      const { project } = await res.json()
      setProjects(prev => [project, ...prev])
      setNewProjectName('')
    } catch (err: any) {
      setMsg(err.message)
    }
  }

  // Upload image
  async function upload() {
    if (!selectedProject) { setMsg("Pick a project"); return }
    if (!file) { setMsg("Pick a file"); return }

    setMsg(null)

    // Get cropped blob
    let blob: Blob
    try {
      blob = await getCroppedBlob()
    } catch (err) {
      // fallback to original
      blob = file
    }

    const croppedFile = new File([blob], file.name.replace(/\.[^.]+$/, '') + "-cropped.jpg", { type: "image/jpeg" })

    const fd = new FormData()
    fd.set("file", croppedFile)
    fd.set("projectId", selectedProject)
    fd.set("caption", caption)
    fd.set("aspect", "16:9")
    fd.set("isCover", isCover.toString())

    const res = await fetch("/api/images", { method:"POST", body: fd })
    const data = await res.json()
    if (res.ok) {
      setFile(null)
      setCaption("")
      setIsCover(false)
      setSelectedProject("")
      setMsg("Uploaded ✅")
      await load()
    } else {
      setMsg(data.error || "Upload failed")
    }
  }

  // Update featured status
  async function updateFeature(projectId: string, data: { isFeatured?: boolean; featuredRank?: number }) {
    await fetch("/api/projects/feature", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectId, ...data }),
    })
    await load() // Reload data after update
  }

  if (loading) return <div className="min-h-dvh flex items-center justify-center">Loading...</div>

  const previewURL = file ? URL.createObjectURL(file) : null

  return (
    <div className="min-h-dvh bg-white text-gray-900">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-8">Admin</h1>

        {msg && <div className="mb-4 p-2 bg-gray-100 text-black rounded">{msg}</div>}

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Create Project */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Create Project</h2>
            <form onSubmit={createProject} className="space-y-4">
              <input
                value={newProjectName}
                onChange={(e) => setNewProjectName(e.target.value)}
                placeholder="Project name"
                className="w-full p-2 border rounded"
                required
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Create
              </button>
            </form>
          </div>

          {/* Upload Image */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Upload Image (16:9 Crop)</h2>
            <div className="space-y-4">
              <select
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select project</option>
                {projects.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>

              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Caption"
                className="w-full p-2 border rounded"
                rows={3}
                required
              />

              <input
                type="file"
                accept="image/*"
                onChange={(e) => onFileChange(e.target.files?.[0] || null)}
                className="w-full"
              />

              {previewURL && (
                <div className="relative h-[50vh] rounded-xl border border-gray-200">
                  <Cropper
                    image={previewURL}
                    crop={crop}
                    zoom={zoom}
                    aspect={16/9}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                    showGrid={true}
                    restrictPosition={false}
                  />
                </div>
              )}

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isCover}
                  onChange={(e) => setIsCover(e.target.checked)}
                />
                Use as cover
              </label>

              <button
                onClick={upload}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                disabled={!file}
              >
                Save & Upload (16:9)
              </button>
            </div>
          </div>
        </div>

        {/* Projects List with Featured Controls */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Projects ({projects.length})</h2>
          {projects.length === 0 ? (
            <p className="text-gray-500">No projects yet.</p>
          ) : (
            <div className="space-y-4">
              {projects.map(p => (
                <div key={p.id} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <h3 className="font-medium">{p.name}</h3>
                      <p className="text-sm text-gray-500">Slug: {p.slug}</p>
                      <p className="text-sm text-gray-500">Images: {images.filter(i => i.projectId === p.id).length}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Featured Toggle */}
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={p.isFeatured || false}
                          onChange={(e) => updateFeature(p.id, { isFeatured: e.target.checked })}
                          className="w-4 h-4"
                        />
                        Featured
                      </label>

                      {/* Rank Selector */}
                      <select
                        value={p.featuredRank ?? ""}
                        onChange={(e) => updateFeature(p.id, { featuredRank: parseInt(e.target.value) || undefined })}
                        disabled={!p.isFeatured}
                        className="p-1 border rounded disabled:opacity-50"
                      >
                        <option value="">—</option>
                        {[1, 2, 3, 4, 5, 6].map(n => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>

                      {/* Cover Image */}
                      {p.coverUrl && (
                        <img src={p.coverUrl} className="w-20 h-20 object-cover rounded" alt="Cover" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
