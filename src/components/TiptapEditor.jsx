"use client"

import { useQuill } from "react-quilljs"
import "quill/dist/quill.snow.css"
import { useEffect } from "react"

const TextEditor = ({ value, onChange }) => {

  const { quill, quillRef } = useQuill({
    theme: "snow",
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline"],
        [{ color: [] }, { background: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
      ]
    }
  })

  // API value editor me set karega
  useEffect(() => {
    if (quill && value) {
      quill.clipboard.dangerouslyPasteHTML(value)
    }
  }, [quill, value])

  // Editor change parent ko bhejega
  useEffect(() => {
    if (!quill) return

    const handler = () => {
      onChange(quill.root.innerHTML)
    }

    quill.on("text-change", handler)

    return () => {
      quill.off("text-change", handler)
    }

  }, [quill, onChange])

  return (
    <div className="text-editor">
      <div ref={quillRef} />
    </div>
  )
}

export default TextEditor