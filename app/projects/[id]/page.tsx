import { useRouter } from "next/navigation";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div>
      <h1>Project ID: {id}</h1>
      <p>This page renders content for project {id}.</p>
    </div>
  );
}
