import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { QueryProvidersForTest } from "@/src/shared/components/QueryProvider/QueryProviderForTest";

const Providers = ({ children }: { children: ReactNode }) => {
  return <QueryProvidersForTest>{children}</QueryProvidersForTest>;
};

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, { wrapper: Providers, ...options });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
