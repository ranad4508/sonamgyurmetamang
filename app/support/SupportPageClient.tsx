"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/page-transition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, CreditCard } from "lucide-react";

export default function SupportPageClient() {
  const [activeTab, setActiveTab] = useState("bank");

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="font-playfair text-4xl md:text-5xl text-center mb-6 text-maroon">
          Support & Donations
        </h1>

        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-700">
          Your generous support enables us to continue our mission of preserving
          and sharing Buddhist wisdom, providing education, and fostering global
          peace and harmony.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-amber/10 p-8 rounded-lg shadow-md mb-16 max-w-4xl mx-auto"
        >
          <h2 className="font-playfair text-2xl md:text-3xl mb-8 text-center text-crimson">
            Payment Information
          </h2>

          <Tabs
            defaultValue="bank"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger
                value="bank"
                className={`${
                  activeTab === "bank" ? "bg-maroon text-white" : "text-maroon"
                } data-[state=active]:bg-maroon data-[state=active]:text-white`}
              >
                Bank Transfer
              </TabsTrigger>
              <TabsTrigger
                value="esewa"
                className={`${
                  activeTab === "esewa" ? "bg-orange text-white" : "text-orange"
                } data-[state=active]:bg-orange data-[state=active]:text-white`}
              >
                Esewa
              </TabsTrigger>
              <TabsTrigger
                value="khalti"
                className={`${
                  activeTab === "khalti"
                    ? "bg-vermilion text-white"
                    : "text-vermilion"
                } data-[state=active]:bg-vermilion data-[state=active]:text-white`}
              >
                Khalti
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="bank"
              className="bg-white/70 p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <Building className="h-8 w-8 text-maroon" />
                <h3 className="font-playfair text-2xl text-maroon">
                  Bank Transfer Details
                </h3>
              </div>

              <div className="space-y-4 text-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border-b border-gray-200 pb-4">
                  <p className="font-medium">Account Name:</p>
                  <p>B.T.M.C. Foundation</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border-b border-gray-200 pb-4">
                  <p className="font-medium">Bank Name:</p>
                  <p>Nepal Investment Bank</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border-b border-gray-200 pb-4">
                  <p className="font-medium">Account Number:</p>
                  <p className="font-mono">01234567890123456</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border-b border-gray-200 pb-4">
                  <p className="font-medium">Branch:</p>
                  <p>Boudha Branch, Kathmandu</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border-b border-gray-200 pb-4">
                  <p className="font-medium">Swift Code:</p>
                  <p className="font-mono">NIBLNPKT</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <p className="font-medium">Currency:</p>
                  <p>NPR / USD</p>
                </div>

                <div className="mt-6 bg-amber/10 p-4 rounded-md">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Important:</span> Please
                    include your name and "Donation" in the transfer
                    description. After making the transfer, please notify us at{" "}
                    <span className="text-maroon">
                      donations@khenrinpoche.org
                    </span>{" "}
                    for proper acknowledgment.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="esewa"
              className="bg-white/70 p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-8 w-8 text-orange" />
                <h3 className="font-playfair text-2xl text-orange">
                  Esewa Payment Details
                </h3>
              </div>

              <div className="space-y-4 text-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border-b border-gray-200 pb-4">
                  <p className="font-medium">Esewa ID:</p>
                  <p className="font-mono">9810223626</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border-b border-gray-200 pb-4">
                  <p className="font-medium">Account Name:</p>
                  <p>B.T.M.C. Foundation</p>
                </div>

                <div className="mt-6 bg-amber/10 p-4 rounded-md">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">
                      How to donate using Esewa:
                    </span>
                    <ol className="list-decimal ml-5 mt-2 space-y-1">
                      <li>Log in to your Esewa account</li>
                      <li>Select "Send Money"</li>
                      <li>Enter the Esewa ID: 9810223626</li>
                      <li>Enter the amount you wish to donate</li>
                      <li>Add "Donation to Khen Rinpoche" in the remarks</li>
                      <li>Complete the transaction</li>
                    </ol>
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="khalti"
              className="bg-white/70 p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-8 w-8 text-vermilion" />
                <h3 className="font-playfair text-2xl text-vermilion">
                  Khalti Payment Details
                </h3>
              </div>

              <div className="space-y-4 text-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border-b border-gray-200 pb-4">
                  <p className="font-medium">Khalti ID:</p>
                  <p className="font-mono">9766883351</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border-b border-gray-200 pb-4">
                  <p className="font-medium">Account Name:</p>
                  <p>B.T.M.C. Foundation</p>
                </div>

                <div className="mt-6 bg-amber/10 p-4 rounded-md">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">
                      How to donate using Khalti:
                    </span>
                    <ol className="list-decimal ml-5 mt-2 space-y-1">
                      <li>Log in to your Khalti account</li>
                      <li>Select "Send Money"</li>
                      <li>Enter the mobile number: 9766883351</li>
                      <li>Enter the amount you wish to donate</li>
                      <li>Add "Donation to Khen Rinpoche" in the remarks</li>
                      <li>Complete the transaction</li>
                    </ol>
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-amber/10 to-orange/10 p-8 rounded-lg shadow-md text-center max-w-3xl mx-auto"
        >
          <h2 className="font-playfair text-2xl text-maroon mb-4">
            Contact for Support
          </h2>
          <p className="text-gray-700 mb-4">
            For any questions about donations or support opportunities, please
            contact our support team:
          </p>
          <p className="text-lg font-medium text-crimson mb-2">
            support@khenrinpoche.org
          </p>
          <p className="text-lg font-medium text-crimson">+977 9810 223 626</p>
        </motion.div>
      </div>
    </PageTransition>
  );
}
