function Form() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-xl text-center">Patient Monitoring</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add Patients and{" "}
        <span className="text-indigo-600 font-bold">Manage Them</span>
      </p>

      <form className="bg-white shadow-lg rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="petName"
          >
            Pet's Name
          </label>
          <input
            id="petName"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Pet Name"
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="ownerName"
          >
            Owner's Name
          </label>
          <input
            id="ownerName"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Owner Name"
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="ownerEmail"
          >
            Ownwer's Email
          </label>
          <input
            id="ownerEmail"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Owner Email"
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="discharge"
          >
            Discharge
          </label>
          <input
            id="Discharge"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="discharge"
          >
            Symptoms
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="symptoms"
            placeholder="Describe symptoms"
          ></textarea>
        </div>

        <input
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all"
          type="submit"
          value="Add Patient"
        />
      </form>
    </div>
  );
}

export default Form;
