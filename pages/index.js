import Layout from "../components/views/layout/Layout";
import indexModule from "./Index.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={indexModule.divPrincipal}>
        <div className={indexModule.divAnimacion}>
          <span className={indexModule.hola}>Hola,</span><br/>
          <span className={indexModule.nombre}>Soy matias</span><br/>
          <span className={indexModule.especialidad}>Un desarrollador frontend</span>
        </div>
      </div>
    </Layout>
  )
}
