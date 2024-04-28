import TambahEventForm from "../../../components/tambah-acara/TambahEventForm";
import DaftarEventSide from "../../../components/tambah-acara/DaftarEventSide";

export default function TambahEvent() {
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="mx-[25px] my-[25px]">
        <div className="flex flex-row space-x-6 items-center mb-[16px] justify-between">
          <h1 className="font-bold text-primaryBlue">Events</h1>
          <button className="hidden md:block rounded-lg text-sm font-medium border bg-primaryButtonBlue text-white px-3 py-2 hover:bg-primaryButtonBlue/80">
            Tambah Event +
          </button>
          <button className="md:hidden rounded-lg text-sm font-medium border bg-primaryButtonBlue text-white px-3 py-2 hover:bg-primaryButtonBlue/80">
            +
          </button>
        </div>
        <div className=" overflow-y-auto overflow-x-auto lg:oveflow-x-hidden">
          <DaftarEventSide />
        </div>
      </div>
      <div className="lg:w-4/5">
        <TambahEventForm />
      </div>
    </div>
  );
}
