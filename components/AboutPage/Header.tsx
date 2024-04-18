import CodeBy from "../CodeBy";

type Props = {
  name: string;
};
export default function Header({ name }: Props) {
  return (
    <div className="pl-4 sm:pl-8 text-white bg-[#242424] w-full flex flex-col pt-5">
      <div className="text-[#c9fd74]">
        <CodeBy coder={name} to="/" />
      </div>
    </div>
  );
}
