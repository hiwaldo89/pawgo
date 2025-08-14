"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import cn from "classnames";
import { useAuth } from "../hooks/useAuth";
import RecentArticles from "../components/RecentArticles";
import Container from "../components/Container";
import AccountFavorites from "../components/AccountFavorites/AccountFavorites";
import AccountRequests from "../components/AccountRequests/AccountRequests";

type SectionId = (typeof sections)[number]["id"];
type AccountSectionProps = {
  section: SectionId;
};

const sections = [
  { id: "solicitudes", text: "Mis solicitudes" },
  { id: "favoritos", text: "Mi lista peluda" },
  { id: "busquedas", text: "Búsquedas guardadas" },
  { id: "preferencias", text: "Preferencias" },
] as const;

const AccountSection: React.FC<AccountSectionProps> = ({ section }) => {
  switch (section) {
    case "solicitudes":
      return <AccountRequests />;
    case "favoritos":
      return <AccountFavorites />;
    default:
      return (
        <div>
          <h2 className="subheading">
            {sections.find(({ id }) => id === section)?.text}
          </h2>
        </div>
      );
  }
};

const Account = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<SectionId>(sections[0].id);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }
  return (
    <Suspense>
      <div className="mt-[50px] lg:mt-[116px]">
        <Container className="mb-[100px]">
          <div className="grid grid-cols-12 gap-[20px]">
            <div className="col-span-12 md:col-span-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={cn(
                    "w-full px-[15px] py-[8px] subheading2 rounded-[9px] cursor-pointer mb-[10px] border",
                    {
                      "bg-white": activeSection !== section.id,
                      "bg-lavander text-white": activeSection === section.id,
                    }
                  )}
                  onClick={() => {
                    setActiveSection(section.id);
                  }}
                >
                  {section.text}
                </button>
              ))}
              <button
                className="
            w-full px-[15px] py-[8px] subheading2 rounded-[9px] cursor-pointer mb-[10px] border bg-white"
                onClick={logout}
              >
                Cerrar sesión
              </button>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="bg-white rounded-[9px] px-[32px] py-[25px]">
                <Suspense>
                  <AccountSection section={activeSection} />
                </Suspense>
              </div>
            </div>
          </div>
        </Container>
        <RecentArticles />
      </div>
    </Suspense>
  );
};

export default Account;
