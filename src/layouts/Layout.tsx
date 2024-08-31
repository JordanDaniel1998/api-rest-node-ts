import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="bg-slate-800">
        <div className="py-10 w-11/12 md:w-8/12 xl:w-7/12 mx-auto">
          <h1 className="text-4xl font-extrabold text-white">
            Administrador de Productos
          </h1>
        </div>
      </header>
      <main className="w-11/12 md:w-8/12 xl:w-7/12 mx-auto mt-10 p-10 shadow-sm bg-white">
        <Outlet />
      </main>
    </>
  );
}
