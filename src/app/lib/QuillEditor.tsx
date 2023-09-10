import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css"; // Import Quill styles

interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
  const quillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (quillRef.current) {
      import("quill").then((Quill) => {
        const quill = new Quill.default(quillRef.current!, {
          // Add the ! to assert that it's not null
          theme: "snow", // Use the "snow" theme
        });

        quill.on("text-change", () => {
          if (onChange) {
            onChange(quill.root.innerHTML);
          }
        });

        if (value) {
          quill.root.innerHTML = value;
        }
      });
    }
  }, []);

  return <div ref={quillRef}></div>;
};

export default dynamic(() => Promise.resolve(QuillEditor), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
