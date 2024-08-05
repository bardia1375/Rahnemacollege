import React from "react";
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import FizzBuzz, { FizzBuzzInternal, InputNumber } from "./FizzBuzz";

describe("FizzBuzz", () => {
  describe("Input", () => {
    it("should have a button and a text input", () => {
      render(
        <InputNumber onSubmit={() => {}} buttontext="submit"></InputNumber>
      );
      const textBox = screen.getByRole("spinbutton");
      expect(textBox).toBeVisible();
      expect(textBox).toHaveAttribute("min", "0");
      const button = screen.getByRole("button", { name: /submit/i });
      expect(button).toBeVisible();
    });

    it("when button clicked it should return a number ", () => {
      const submitFn = vi.fn(); // استفاده از vi.fn() به جای jest.fn()
      render(
        <InputNumber onSubmit={submitFn} buttontext="submit"></InputNumber>
      );
      const textBox = screen.getByRole("spinbutton");
      userEvent.type(textBox, "1");
      const button = screen.getByRole("button", { name: /submit/i });
      fireEvent.click(button);
      expect(submitFn).toBeCalled();
      expect(submitFn).toBeCalledWith(1); // باید با مقدار 1 فراخوانی شود
    });
  });
  describe("Start Fizzbuzz", () => {
    it("should show 0 after start", () => {
      render(<FizzBuzz></FizzBuzz>);
      const startButton = screen.getByRole("button", { name: /start/i });
      fireEvent.click(startButton);
      const startButton_ = screen.queryByRole("button", { name: /start/i });
      expect(startButton_).toBeNull();
    });
  });
  describe("FizzBuzz Internal", () => {
    it("should show two buttons and a number ", () => {
      render(<FizzBuzzInternal startNumber={0}></FizzBuzzInternal>);
      const plus = screen.getByRole("button", { name: "+" });
      const minus = screen.getByRole("button", { name: "-" });
      const text = screen.getByText("0");
    });

  });
});
