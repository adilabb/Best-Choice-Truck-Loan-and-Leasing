'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function ApplyPage() {
  const [mailingList, setMailingList] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Start your application...</h1>
      <form name="apply" className="max-w-3xl mx-auto space-y-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name:</Label>
            <Input id="firstName" name="firstName" type="text" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name:</Label>
            <Input id="lastName" name="lastName" type="text" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="middleInitial">Middle Initial:</Label>
            <Input id="middleInitial" name="middleInitial" type="text" maxLength={1} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="businessName">Business name:</Label>
          <Input id="businessName" name="businessName" type="text" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email: *</Label>
          <Input id="email" name="email" type="email" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone number:</Label>
          <Input id="phone" name="phone" type="tel" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address Street Name & Number:</Label>
          <Input id="address" name="address" type="text" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City:</Label>
            <Input id="city" name="city" type="text" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="province">Province:</Label>
            <Select name="province" required>
              <SelectTrigger>
                <SelectValue placeholder="Select Province" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AB">Alberta</SelectItem>
                <SelectItem value="BC">British Columbia</SelectItem>
                <SelectItem value="MB">Manitoba</SelectItem>
                <SelectItem value="NB">New Brunswick</SelectItem>
                <SelectItem value="NL">Newfoundland and Labrador</SelectItem>
                <SelectItem value="NS">Nova Scotia</SelectItem>
                <SelectItem value="ON">Ontario</SelectItem>
                <SelectItem value="PE">Prince Edward Island</SelectItem>
                <SelectItem value="QC">Quebec</SelectItem>
                <SelectItem value="SK">Saskatchewan</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="postalCode">Postal Code:</Label>
            <Input id="postalCode" name="postalCode" type="text" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="comments">Comments: *</Label>
          <Textarea 
            id="comments" 
            name="comments" 
            placeholder="Please provide any additional information about your application"
            required
            className="min-h-[100px]"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="mailingList" 
            checked={mailingList}
            onCheckedChange={(checked) => setMailingList(checked as boolean)}
          />
          <Label htmlFor="mailingList" className="text-sm font-normal">
            Add me to your mailing list
          </Label>
        </div>

 

      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Privacy Statement:</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] rounded-md border p-4">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Introduction</h3>
                <p className="text-muted-foreground">
                  As a valued customer, we are committed to keeping your personal information secure and only sharing it with authorized
                  companies or when permitted or required by law. This document outlines our privacy policy, explains why we collect specific
                  information, and provides details on your right to "opt-out" of sharing information with non-affiliated third parties. We
                  encourage you to take a moment to read our entire policy to understand how we protect your privacy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Collection of Information</h3>
                <p className="text-muted-foreground">
                  Purchasing a motor vehicle requires the collection of substantial non-public personal information. For example, if you request us
                  to sell or lease you a vehicle by extending credit, we will need information to evaluate your creditworthiness. This may include
                  information provided by you, as well as data obtained from credit reporting agencies. Additionally, we may collect information
                  from other sources, such as employers, references, and insurance companies. Some of the information we collect may be
                  required by provincial or federal authorities, such as the Department of Motor Vehicles or the Canada Revenue Agency.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Protection of Information</h3>
                <p className="text-muted-foreground">
                  We protect non-public personal information in accordance with established industry standards and best practices. Our physical
                  and electronic safeguards comply with both provincial and federal regulations to ensure the security of your data. Access to your
                  information is restricted to employees and outside contractors who need it to deliver products or services to you. We strictly
                  prohibit our employees and agents from sharing your information in any manner that violates applicable laws or our privacy
                  policy.
                </p>
              </div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
      <Button type="submit" className="w-full md:w-auto">
          Submit Application
        </Button>
      </form>
    </div>
  );
}