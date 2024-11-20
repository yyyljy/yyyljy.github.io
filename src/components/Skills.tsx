const Skills = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-white text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 bg-slate-700 rounded-lg shadow-lg hover:bg-slate-600 transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="text-blue-400 text-xl mb-2">Nest.js</div>
              <div className="h-2 bg-slate-600 rounded-full">
                <div className="h-2 bg-blue-400 rounded-full w-[80%]"></div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-slate-700 rounded-lg shadow-lg hover:bg-slate-600 transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="text-blue-400 text-xl mb-2">Solidity</div>
              <div className="h-2 bg-slate-600 rounded-full">
                <div className="h-2 bg-blue-400 rounded-full w-[80%]"></div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-slate-700 rounded-lg shadow-lg hover:bg-slate-600 transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="text-blue-400 text-xl mb-2">React.js</div>
              <div className="h-2 bg-slate-600 rounded-full">
                <div className="h-2 bg-blue-400 rounded-full w-[60%]"></div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-slate-700 rounded-lg shadow-lg hover:bg-slate-600 transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="text-blue-400 text-xl mb-2">English</div>
              <div className="h-2 bg-slate-600 rounded-full">
                <div className="h-2 bg-blue-400 rounded-full w-[80%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
