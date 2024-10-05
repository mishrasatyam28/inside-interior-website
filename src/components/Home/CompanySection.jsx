export default function CompanySection() {
  return (
    <div className="py-4 bg-white flex flex-col mx-auto">
      <p className="py-4 text-lg font-medium text-center opacity-40">
        Trusted by the world’s best companies
      </p>
      <div className="container flex flex-wrap items-center justify-between mx-auto px-4">
        <img
          src="/image/awc-company.gif"
          width={128}
          height={128}
          alt=""
          className="opacity-40"
        />
        <img
          src="/image/d2k-company.gif"
          width={128}
          height={128}
          alt=""
          className="opacity-40"
        />
        <img
          src="/image/olympus.gif"
          width={128}
          height={128}
          alt=""
          className="opacity-40"
        />
        <img
          src="/image/manpower-company.gif"
          width={128}
          height={128}
          alt=""
          className="opacity-40"
        />
      </div>
    </div>
  );
}
