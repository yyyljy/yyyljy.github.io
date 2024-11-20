import React from "react";

interface CareerItem {
  id: number;
  period: string;
  company: string;
  position: string;
  description: string[];
  skills: string[];
}

const Career = () => {
  const careerHistory: CareerItem[] = [
    {
      id: 1,
      period: "2024.11 - Present",
      company: "GURUFIN",
      position: "블록체인 개발자",
      description: ["블록체인 플랫폼 개발(미정)", "블록체인 플랫폼 운영(미정)"],
      skills: ["Go", "TypeScript", "Next.js"],
    },
    {
      id: 2,
      period: "2023.10 - 2024.11",
      company: "이노그리드",
      position: "Web3 개발자",
      description: [
        "NFT 플랫폼 PoC",
        "광고 플랫폼 PoC",
        "NFT 마켓플레이스 Demo",
      ],
      skills: ["Express", "Solidity", "SQL", "React", "TypeScript", "Nest.js"],
    },
    {
      id: 3,
      period: "2021.01 - 2022.07",
      company: "아이엠뱅크(대구은행)",
      position: "여신IT 개발자",
      description: ["한국신용정보원 차세대", "여신 화면 개발"],
      skills: ["C", "Linux"],
    },
    {
      id: 4,
      period: "2017.01 - 2019.05",
      company: "DB FIS",
      position: "금융IT 개발자",
      description: ["해외선물옵션 차트 API", "HTS 화면 개발"],
      skills: ["Visual Basic", "SQL", "MFC", "C++"],
    },
    // 더 많은 경력 항목 추가
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          My <span className="text-blue-400">Career</span>
        </h2>
        <div className="space-y-8">
          {careerHistory.map((item) => (
            <div
              key={item.id}
              className="bg-slate-700 rounded-xl p-6 hover:shadow-xl transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.company}
                  </h3>
                  <p className="text-blue-400">{item.position}</p>
                </div>
                <span className="text-slate-300">{item.period}</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
