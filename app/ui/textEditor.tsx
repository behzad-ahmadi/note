// import dynamic from 'next/dynamic'
// import 'react-quill/dist/quill.snow.css'

// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

interface TextEditorProps {
  className?: string
  value: string
  onChange: (content: string) => void
}

export default function TextEditor({
  className,
  value,
  onChange,
}: TextEditorProps) {
  return (
    <div className={`${className} `}>
      <textarea
        className='textarea textarea-bordered w-full'
        placeholder='Bio'
        value={value}
        onChange={e => onChange(e.target.value)}
      ></textarea>

      {/* <ReactQuill
        value={value}
        onChange={onChange}
        theme='snow'
        className='bg-white text-black overflow-auto max-h-72'
      /> */}
    </div>
  )
}
