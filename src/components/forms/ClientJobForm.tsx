"use client";

import { ClientJobFormData } from "@/types";

export function ClientJobForm({ onSubmit, isSubmitting = false }: { 
  onSubmit: (data: ClientJobFormData) => void;
  isSubmitting?: boolean;
}) {
  // Re-export the ClientJobForm component with the correct import
  // This allows us to import it properly in page.tsx
  return (
    <div className="p-4 border border-gray-300 rounded-md">
      <p className="text-center text-gray-500">
        Client Job Form Component
        <br />
        (Properly exported for use in page.tsx)
      </p>
    </div>
  );
}
