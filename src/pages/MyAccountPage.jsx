

export const MyAccountPage = () => {
  return (
    <main className="layoutBase">
      <h1 className="sectionTitle">My Account</h1>
      <section className="flex-col h-[calc(100vh-280px)] w-full justify-center items-center px-32">
        <div className="flex gap-4 shadow-lg h-full w-full border border-r-red-200/70 border-t-red-200/70 rounded-xl p-8">
          <aside className="w-1/3 h-full border border-white border-r-red-400/70 my-1">
            <ul>
              <li>Information</li>

              <li>Settings</li>
              <li className="text-gray-400/70">Subscription</li>
              <li>Close account</li>
            </ul>
          </aside>
          <section className="w-full grid grid-cols-3 grid-rows-4 gap-3 my-2 justify-center items-center">
            <div className="bg-gray-200 h-full w-full rounded-xl row-span-3 flex justify-center py-4">
              <div className="bg-gray-400/70 h-48 w-48 rounded-full">

              </div>
            </div>
            <div className="bg-gray-200 h-full w-full col-span-2 rounded-xl"></div>
            <div className="bg-gray-200 h-full w-full rounded-xl"></div>
            <div className="bg-gray-200 h-full w-full rounded-xl row-span-2"></div>
            <div className="bg-gray-200 h-full w-full rounded-xl"></div>
            <div className="bg-gray-200 h-full w-full rounded-xl"></div>
            <div className="bg-gray-200 h-full w-full rounded-xl col-span-2"></div>
            
          </section>
        </div>
      </section>
    </main>
  );
}
