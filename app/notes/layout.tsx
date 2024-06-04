import MainNavbar from '@/app/ui/mainNavbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainNavbar />
      <div className='mx-6 mt-20'>{children}</div>
    </>
  )
}
