const Patient = () => {
  return (
    <div className="m-3 bg-white shadow-lg px-5 py-10 rounded-xl">
      <p className="font-bold text-gray-700 uppercase mb-3">
        Name: <span className="normal-case font-normal">...</span>
      </p>

      <p className="font-bold text-gray-700 uppercase mb-3">
        Owner: <span className="normal-case font-normal">...</span>
      </p>

      <p className="font-bold text-gray-700 uppercase mb-3">
        Email: <span className="normal-case font-normal">...</span>
      </p>

      <p className="font-bold text-gray-700 uppercase mb-3">
        Discharge Date: <span className="normal-case font-normal">...</span>
      </p>

      <p className="font-bold text-gray-700 uppercase mb-3">
        Symptoms: <span className="normal-case font-normal">...</span>
      </p>
    </div>
  );
};

export default Patient;
