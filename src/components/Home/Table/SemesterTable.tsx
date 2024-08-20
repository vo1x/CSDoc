import Row from './Row';
import { ChevronUp } from 'lucide-react';

interface SemesterSubject {
  subject: string;
  chapterCount: string;
  code: string;
}

function SemesterTable({ data }: { data: any }) {
  const { semester, subjects } = data;

  return (
    <div className="flex bg-[#181825] h-max flex-col p-6 rounded-md">
      <div className="flex items-center justify-between gap-2 mb-8">
        <span className="text-xl font-semibold text-[#89b4fa] ">Semester {semester}</span>
        <ChevronUp size={28} />
      </div>
      <div className="grid grid-flow-row w-full">
        <div className="grid grid-cols-4 pb-2 border-b border-[#313244]">
          <div className="col-span-2 text-[#a6adc8]">Subject</div>
          <div className="text-[#a6adc8]">Chapters</div>
          <div className="text-[#a6adc8]">Code</div>
        </div>

        {subjects.map((subject: SemesterSubject, i: number) => (
          <Row rowIndex={i + 1} data={subject} />
        ))}
      </div>
    </div>
  );
}

export default SemesterTable;
