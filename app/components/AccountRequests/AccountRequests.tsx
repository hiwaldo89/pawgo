import { useAdoptionRequests } from "@/app/hooks/useAdoptionRequest";
import Request from "../Request";

const AccountRequests = () => {
  const { requests } = useAdoptionRequests();

  return (
    <div className="flex flex-col gap-[20px]">
      {requests.length === 0 && (
        <h3 className="subheading text-center">
          No tienes solicitudes activas
        </h3>
      )}
      {requests.map((request) => (
        <Request key={request} id={request} />
      ))}
    </div>
  );
};

export default AccountRequests;
