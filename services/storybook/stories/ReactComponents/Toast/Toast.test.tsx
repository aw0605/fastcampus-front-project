import React from "react";
import { describe, expect, it, vi } from "vitest";

import { render, screen, userEvent, waitFor } from "../../../test/test-utils";
import * as stories from "./Toast.stories";
import { composeStories } from "@storybook/react";

const { ToastStory } = composeStories(stories);

describe("Toast 컴포넌트 기능 테스트", () => {
  it("Toast 클릭 시, Toast가 잘 뜨는지 확인", async () => {
    render(<ToastStory />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Hello, World!")).toBeInTheDocument();
    });
  });

  it("Toast 클릭 3초 후, Toast 사라지는지 확인", async () => {
    vi.useFakeTimers();
    const { container } = render(<ToastStory />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const toastContainer = container.querySelector("#toast-container");

    await vi.advanceTimersByTimeAsync(3001);
    expect(toastContainer?.hasChildNodes()).toBeFalsy();
  });
});
