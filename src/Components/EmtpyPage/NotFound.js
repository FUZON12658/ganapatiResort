import ScrollingLogo from "../../MasterComponents/ScrollingLogo"

export default () => {
  return (
      <main>
        <ScrollingLogo/>
          <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
              <div className="max-w-lg mx-auto space-y-3 text-center">
                  <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                      Page not found
                  </h3>
                  <p className="text-gray-600">
                      Sorry, the page you are looking for could not be found or has been removed.
                  </p>
              </div>
          </div>
      </main>
  )
}