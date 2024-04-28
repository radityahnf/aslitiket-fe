"use client";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Image from "next/image";

const FormSchema = z.object({
  nama: z.string().min(1, "Nama Acara perlu diisi!"),
  deskripsi: z.string().min(1, "Deskripsi Acara perlu diisi!"),
  tanggal: z.string().min(1, "Tanggal Acara perlu diisi!"),
  kapasitas: z.string().min(1, "Kapasitas Acara perlu diisi!"),
  kategori: z.string().min(1, "Kategori Acara perlu dipilih!"),
  jumlahTiket: z.string().min(1, "Jumlah Tiket perlu diisi!"),
  hargaTiket: z.string().min(1, "Harga Tiket perlu diisi!"),
});

export default function TambahEventForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nama: "",
      deskripsi: "",
      tanggal: "",
      kapasitas: "",
      kategori: "",
      jumlahTiket: "",
      hargaTiket: "",
    },
  });

  return (
    <div className="mr-[25px] lg:mx-[25px] my-[25px] flex flex-col">
      <h1 className="self-center lg:self-start text-headerBlue text-[24px] font-semibold mt-6 mb-[20px]">
        Event Baru
      </h1>
      <div className="w-full flex lg:flex-row flex-col space-x-6 ">
        <Form {...form}>
          <div className="flex flex-col">
            <div className="self-center lg:self-start w-[200px] h-[250px] mb-10">
              <Image src="/images/Art.png" width={250} height={250} alt="" />
            </div>

            <div className="self-center">
              <Image
                src="/images/add-image.png"
                width={40}
                height={40}
                alt=""
              />
            </div>
          </div>

          <div>
            <h1 className="text-sm text-primaryGrey font-semibold">
              EVENT DETAILS
            </h1>
            <FormField
              control={form.control}
              name="nama"
              render={({ field }) => (
                <FormItem style={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                    className="justify-between"
                  >
                    <FormLabel style={{ marginTop: "10px" }}>
                      <div className="text-formInputBlue">Nama Acara</div>
                    </FormLabel>
                    <FormControl>
                      <Input style={{}} placeholder="" {...field} />
                    </FormControl>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tanggal"
              render={({ field }) => (
                <FormItem style={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                    className="justify-between"
                  >
                    <FormLabel style={{ marginTop: "10px" }}>
                      <div className="text-formInputBlue">Tanggal</div>
                    </FormLabel>
                    <FormControl>
                      <Input className="w-full" type="date" style={{}} placeholder="" {...field} />
                    </FormControl>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-row space-x-6">
              <FormField
                control={form.control}
                name="kapasitas"
                render={({ field }) => (
                  <FormItem style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                      className="justify-between"
                    >
                      <FormLabel style={{ marginTop: "10px" }}>
                        <div className="text-formInputBlue">Kapasitas</div>
                      </FormLabel>
                      <FormControl>
                        <Input type="number" min={1} style={{}} placeholder="" {...field} />
                      </FormControl>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="jumlahTiket"
                render={({ field }) => (
                  <FormItem style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                      className="justify-between"
                    >
                      <FormLabel style={{ marginTop: "10px" }}>
                        <div className="text-formInputBlue">Jumlah Tiket</div>
                      </FormLabel>
                      <FormControl>
                        <Input type="number" min={1} style={{}} placeholder="" {...field} />
                      </FormControl>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-row space-x-6">
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="hargaTiket"
                  render={({ field }) => (
                    <FormItem style={{}}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                        className="justify-between"
                      >
                        <FormLabel style={{ marginTop: "10px" }}>
                          <div className="text-formInputBlue">Harga Tiket</div>
                        </FormLabel>
                        <FormControl>
                          <Input type="number" min={10000} style={{}} placeholder="" {...field} />
                        </FormControl>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="kategori"
                  render={({ field }) => (
                    <FormItem style={{}}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                        className="justify-between"
                      >
                        <FormLabel style={{ marginTop: "10px" }}>
                          <div className="text-formInputBlue">Kategori</div>
                        </FormLabel>
                        <FormControl>
                          <Input style={{}} placeholder="" {...field} />
                        </FormControl>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="deskripsi"
              render={({ field }) => (
                <FormItem style={{}}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                    className="justify-between"
                  >
                    <FormLabel style={{ marginTop: "10px" }}>
                      <div className="text-formInputBlue">Deskripsi</div>
                    </FormLabel>
                    <FormControl>
                      <Textarea style={{}} placeholder="" {...field} />
                    </FormControl>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-row space-x-6 mt-6">
              <button className="w-1/2 rounded-lg text-sm font-medium border bg-secondaryButtonBlue text-primaryButtonBlue px-3 py-3 hover:bg-primaryButtonBlue/80">
                Kembali
              </button>
              <button className="w-1/2 rounded-lg text-sm font-medium border bg-primaryButtonBlue text-white px-3 py-3 hover:bg-primaryButtonBlue/80">
                Buat Acara
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
