'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function HospitalAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    icNumber: '',
    phoneNumber: '',
    appointmentDateTime: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (Object.values(formData).every(value => value.trim() !== '')) {
      setSubmitted(true)
    } else {
      alert('Please fill in all fields')
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Hospital Appointment Booking</CardTitle>
        <CardDescription>Fill in your details to book an appointment</CardDescription>
      </CardHeader>
      <CardContent>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="icNumber">IC Number</Label>
              <Input
                id="icNumber"
                name="icNumber"
                value={formData.icNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="appointmentDateTime">Appointment Date and Time</Label>
              <Input
                id="appointmentDateTime"
                name="appointmentDateTime"
                type="datetime-local"
                value={formData.appointmentDateTime}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">Book Appointment</Button>
          </form>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Appointment Details:</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>IC Number:</strong> {formData.icNumber}</p>
            <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
            <p><strong>Appointment Date and Time:</strong> {new Date(formData.appointmentDateTime).toLocaleString()}</p>
          </div>
        )}
      </CardContent>
      {submitted && (
        <CardFooter>
          <Button onClick={() => setSubmitted(false)} className="w-full">Book Another Appointment</Button>
        </CardFooter>
      )}
    </Card>
  )
}

