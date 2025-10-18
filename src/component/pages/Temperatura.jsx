import AddTemperatura from "../organisms/AddTemperatura";

const Temperatura = () => {
  return (
    <div className="grid grid-col-1 xl:grid-cols-3 3xl:grid-cols-4  gap-4 xl:items-start">
      <div className="bg-section-light xl:col-span-2 3xl:col-span-3  p-5 rounded-3xl shadow-lg dark:bg-section-dark">
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum alias
          cum at, eius, totam facilis omnis officia architecto minus autem
          asperiores praesentium repellat odit quidem, labore fugit est ullam
          impedit.
        </h1>
      </div>
      <div className="bg-section-light px-3  py-5 rounded-3xl shadow-lg dark:bg-section-dark">
        <AddTemperatura />
      </div>
    </div>
  );
};
export default Temperatura;
