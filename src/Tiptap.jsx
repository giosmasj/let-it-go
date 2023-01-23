// src/Tiptap.jsx
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: "<p>Let it all out here. It's for your eyes only.</p>",
  })

  return (
    <EditorContent editor={editor} />
  )
}

export default Tiptap