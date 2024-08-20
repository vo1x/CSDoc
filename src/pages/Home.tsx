import SemesterTable from '../components/Home/Table/SemesterTable';

const semesterData = [
  {
    semester: 1,
    subjects: [
      {
        subject: 'Introduction to Information Technology',
        code: 'CSC114',
        chapterCount: '11'
      },
      {
        subject: 'C Programming',
        code: 'CSC115',
        chapterCount: '11'
      },
      {
        subject: 'Digital Logic',
        code: 'CSC116',
        chapterCount: '7'
      },
      {
        subject: 'Mathematics I',
        code: 'MTH117',
        chapterCount: '10'
      },
      {
        subject: 'Physics',
        code: 'PHY118',
        chapterCount: '8'
      }
    ]
  },
  {
    semester: 2,
    subjects: [
      {
        subject: 'Discrete Structure',
        code: 'CSC165',
        chapterCount: '6+'
      },
      {
        subject: 'Object-Oriented Programming',
        code: 'CSC166',
        chapterCount: '8+'
      },
      {
        subject: 'Microprocessor',
        code: 'CSC167',
        chapterCount: '7+'
      },
      {
        subject: 'Mathematics II',
        code: 'MTH168',
        chapterCount: '10+'
      },
      {
        subject: 'Statistics I',
        code: 'STA169',
        chapterCount: '7+'
      }
    ]
  },
  {
    semester: 3,
    subjects: [
      {
        subject: 'Data Structure and Algorithm',
        code: 'CSC211',
        chapterCount: '8+'
      },
      {
        subject: 'Numerical Method',
        code: 'CSC212',
        chapterCount: '6+'
      },
      {
        subject: 'Computer Architecture',
        code: 'CSC213',
        chapterCount: '9+'
      },
      {
        subject: 'Computer Graphics',
        code: 'CSC214',
        chapterCount: '10+'
      },
      {
        subject: 'Statistics II',
        code: 'STA215',
        chapterCount: '8+'
      }
    ]
  },
  {
    semester: 4,
    subjects: [
      {
        subject: 'Theory of Computation',
        code: 'CSC262',
        chapterCount: '7+'
      },
      {
        subject: 'Computer Networks',
        code: 'CSC263',
        chapterCount: '7+'
      },
      {
        subject: 'Database Management System',
        code: 'CSC265',
        chapterCount: '10+'
      },
      {
        subject: 'Operating System',
        code: 'CSC264',
        chapterCount: '7+'
      },
      {
        subject: 'Artificial Intelligence',
        code: 'CSC266',
        chapterCount: '6+'
      }
    ]
  }
];

function Home() {
  return (
    <div className="overflow-y-auto h-screen w-screen px-16 py-4 grid grid-cols-2 gap-8 auto-rows-max">
      {semesterData.map((semester) => (
        <SemesterTable data={semester} />
      ))}
    </div>
  );
}

export default Home;
