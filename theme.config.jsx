import Image from "next/image";
import logo from "./public/zlogo_denoised.png"

export default {
    docsRepositoryBase: "https://github.com/ZephyrLabs/notes/blob/main",
    logo: () => { 
      return (
      <>
        <Image
          src={logo}
          width='60'
          height='60'
          alt="ZephyrLabs"
        />
        <strong>  ZephyrLabs</strong>
        <span>  Notes</span>
      </>
      )
    },
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="ZephyrLabs Notes" />
        <meta property="og:description" content="This is my collection of notes and documentation" />
        <meta property="og:image" content="http://zephyrlabs-notes.vercel.app/social-preview.png" />
        <meta property="og:url" content="https://zephyrlabs-notes.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ZephyrLabs Notes" />
        <meta name="twitter:description" content="This is my collection of notes and documentation" />
        <meta name="twitter:image" content="http://zephyrlabs-notes.vercel.app/social-preview.png" />
      </>
    ),
    useNextSeoProps() {
      return {
        titleTemplate: '%s - ZephyrLabs'
      }
    },
    navigation: true,
    footer: {
      text: (
        <span>
          Apache 2.0 {new Date().getFullYear()} ©{' '}
          ZephyrLabs
        </span>
      )
    },
    project: {
      link: 'https://github.com/ZephyrLabs/notes'
    },
  }