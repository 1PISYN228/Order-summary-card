import Main from "@/layouts/Main"
import "@/styles"
import { Head } from "minista"


export default function () {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="../../public/images/favicon-32x32.png"></link>
        <title>Frontend Mentor | Order summary card</title>
      </Head>

      <div className="image" />

      <Main />
    </>
  )
}
