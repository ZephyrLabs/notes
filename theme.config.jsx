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
        <meta property="og:title" content="Notes" />
        <meta property="og:description" content="ZephyrLabs Notes" />
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