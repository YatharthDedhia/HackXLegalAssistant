const Input = () => {
  return (
    <div className="input-field mt-5 w-full">
      <div class="mb-6 sm:flex sm:flex-row sm:w-3/4 sm:mx-auto justify-around flex flex-col gap-3 w-11/12 mx-12  ">
        <textarea
          type="text"
          id="default-input"
          class="bg-gray-300  text-gray-900 text-sm  rounded-xl sm:w-5/12 w-10/12 h-56 border border-10 border-blue-500 dark:bg-gray-700 dark:text-white dark:border-blue-500 shadow-xl"
          placeholder="Enter Case Details..."
        />
           <div className="output-field bg-gray-300 border border-10 border-blue-500 text-gray-900 text-sm rounded-xl sm:w-5/12 w-10/12  block p-3 dark:bg-gray-700  dark:text-white dark:border-blue-500 overflow-y-auto h-56">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis quos, molestiae placeat numquam, iste fuga nobis exercitationem dolore nisi illum qui voluptatibus sapiente voluptas laudantium. Nemo necessitatibus asperiores nesciunt molestias quaerat dolores repellat minima dolorem omnis, nostrum amet sed fugiat maiores ut voluptates distinctio aliquid magni. Iusto magni optio nostrum, rem quia eum in accusantium officiis ipsam, repellat fugiat quibusdam atque voluptatum dolore temporibus adipisci impedit numquam exercitatioem itaque quo. Autem officiis totam aliquam corrupti deleniti perferendis debitis laboriosam distinctio veniam. Cum, accusamus omnis placeat nostrum expedita voluptatem? Dolor, mollitia recusandae? Corporis numquam animi, maiores vel eius recusandae molestias!</div>
      </div>
   

      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Summarize
        </span>
      </button>
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Citation
        </span>
      </button>
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Case
        </span>
      </button>
    </div>
  );
};

export default Input;
