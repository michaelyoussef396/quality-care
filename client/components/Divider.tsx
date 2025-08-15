interface DividerProps {
  className?: string;
}

export default function Divider({ className = "" }: DividerProps) {
  return (
    <div className={`flex h-[17px] flex-col justify-center items-center w-full ${className}`}>
      <div className="h-px w-full max-w-[1080px] bg-gradient-to-r from-transparent via-[#4A4A4A] to-transparent"></div>
    </div>
  );
}
