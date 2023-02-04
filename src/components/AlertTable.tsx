function AlertTable() {
  return (
    <div className="grid grid-cols-2 gap-10 px-12 mt-4">
      <div className="border">
        <p className="font-semibold mb-2">Alerts</p>
        <div></div>
      </div>
      <div className="border">
        <p className="font-semibold">Alert History</p>
      </div>
    </div>
  );
}

export default AlertTable;
