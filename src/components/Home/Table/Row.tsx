function Row({ rowIndex, data }: { rowIndex: number; data: any }) {
  const isOdd = rowIndex % 2 !== 0;

  const { subject, code, chapterCount } = data;

  return (
    <div className={`grid grid-cols-4 p-2 px-4 ${isOdd && 'bg-[#151520]'}`}>
      <span className="col-span-2 font-semibold text-ellipsis cursor-pointer hover:text-[#89b4fa]">
        {subject}
      </span>
      <span>{chapterCount.trim()}</span>
      <span>{code}</span>
    </div>
  );
}

export default Row;
