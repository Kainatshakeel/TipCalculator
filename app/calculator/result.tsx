const Result = ({ label, value }) => (
    <div className="flex justify-between items-center gap-24 p-4">
      <div>
        <div className="text-white text-xl">{label}</div>
        <div className="text-grayish-cyan">/ person</div>
      </div>
      <div className="text-right text-primary text-4xl font-bold">{value}</div>
    </div>
  );
  export default Result;