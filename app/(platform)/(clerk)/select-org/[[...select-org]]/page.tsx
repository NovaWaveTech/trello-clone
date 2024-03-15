import { OrganizationList } from "@clerk/nextjs";

export default function OrganizationPage() {
    return (
        < OrganizationList
        hidePersonal
        afterSelectOrganizationUrl={"/organization/:id"}
        afterCreateOrganizationUrl={"/organization/:id"}
        />
    );
}
