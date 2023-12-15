import Patient from "./Patient";

function PatientList() {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="text-xl font-black text-center">Patiens List</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Manage Your{" "}
        <span className="text-indigo-600 font-bold">
          Patients and Appoinments
        </span>
      </p>

      <Patient />
      <Patient />
      <Patient />
      <Patient />
      <Patient />
      <Patient />
      <Patient />
    </div>
  );
}

export default PatientList;
