import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Import Quill styles

interface QuillEditorProps {
  onChange: (value: string) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ onChange }) => {
  const quillRef = useRef<HTMLDivElement | null>(null);
  const [editorContent, setEditorContent] = useState<string>("");

  useEffect(() => {
    if (quillRef.current) {
      const quill = new Quill(quillRef.current, {
        theme: "snow", // Use the "snow" theme
      });

      quill.on("text-change", () => {
        const newContent = quill.root.innerHTML;
        setEditorContent(newContent);
        if (onChange) {
          onChange(newContent);
        }
      });
    }
  }, [onChange]);

  return <div ref={quillRef}></div>;
};

export default QuillEditor;
