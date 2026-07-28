import type { PersonalInfo } from "@/entities/personal-info/types";
import { formatDate } from "@/shared/utils/format-date";
import { CalendarDays, MapPin, Phone, Mail } from "lucide-react";

interface Props {
  personalInfo: PersonalInfo;
}

const ProfileTable = ({ personalInfo }: Props) => {
  return (
    <table className="border-collapse border border-border overflow-hidden rounded-lg md:rounded-xl bg-surface w-full md:w-auto text-sm md:text-base">
      <tbody>
        <tr className="border border-border">
          <th className="px-3 py-1.5 sm:px-4 md:px-5 md:py-2 xl:px-6 xl:py-2 border-r border-border">
            <span className="sm:hidden inline-flex w-full justify-center">
              <CalendarDays className="w-4 h-4 text-primary" />
            </span>
            <span className="hidden sm:inline">생년월일</span>
          </th>
          <td className="px-3 py-1.5 sm:px-4 md:px-5 md:py-2 xl:px-6 xl:py-2">{formatDate(personalInfo.birthday)}</td>
        </tr>
        <tr className="border border-border">
          <th className="px-3 py-1.5 sm:px-4 md:px-5 md:py-2 xl:px-6 xl:py-2 border-r border-border">
            <span className="sm:hidden inline-flex w-full justify-center">
              <MapPin className="w-4 h-4 text-primary" />
            </span>
            <span className="hidden sm:inline">주소</span>
          </th>
          <td className="px-3 py-1.5 sm:px-4 md:px-5 md:py-2 xl:px-6 xl:py-2">{personalInfo.address}</td>
        </tr>
        <tr className="border border-border">
          <th className="px-3 py-1.5 sm:px-4 md:px-5 md:py-2 xl:px-6 xl:py-2 border-r border-border">
            <span className="sm:hidden inline-flex w-full justify-center">
              <Phone className="w-4 h-4 text-primary" />
            </span>
            <span className="hidden sm:inline">전화번호</span>
          </th>
          <td className="px-3 py-1.5 sm:px-4 md:px-5 md:py-2 xl:px-6 xl:py-2">{personalInfo.phone}</td>
        </tr>
        <tr className="border border-border">
          <th className="px-3 py-1.5 sm:px-4 md:px-5 md:py-2 xl:px-6 xl:py-2 border-r border-border">
            <span className="sm:hidden inline-flex w-full justify-center">
              <Mail className="w-4 h-4 text-primary" />
            </span>
            <span className="hidden sm:inline">이메일</span>
          </th>
          <td className="px-3 py-1.5 sm:px-4 md:px-5 md:py-2 xl:px-6 xl:py-2">{personalInfo.email}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProfileTable;
