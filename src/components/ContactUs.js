import React, { useState } from "react";
import emailjs from "emailjs-com";
import Phone from "../components/img/Phone.jpg";
import {
  Box,
  Grid,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

const servicesList = [
  "Social Media Management",
  "Content Creation",
  "Performance Marketing",
  "Visual Merchandising",
  "Photography & Videography",
  "PR Activation",
];

const SERVICE_ID = "service_mpuni6a";
const TEMPLATE_ID = "template_9a77f1s";
const PUBLIC_KEY = "Z6leBvTLu9gyVEA0B";

export const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    services: [],
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => {
      let updated = [...prev.services];
      if (checked) updated.push(value);
      else updated = updated.filter((s) => s !== value);
      return { ...prev, services: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      website: form.website,
      services: form.services.join(", "),
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        () => {
          alert("Thank you! Your message has been sent.");
          setForm({
            name: "",
            email: "",
            phone: "",
            website: "",
            services: [],
          });
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Something went wrong. Please try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <Box
      sx={{
        width: "85%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 3, md: 6 },
      }}
    >
      <Grid item xs={12} md={5} sx={{ order: { xs: 1, md: 2 } }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={Phone}
            alt="Consultation"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={7} sx={{ order: { xs: 2, md: 1 } }}>
        <Typography
          variant="subtitle2"
          sx={{
            color: "#555",
            letterSpacing: "1px",
            mb: 0.5,
            fontSize: "0.9rem",
          }}
        >
          GOT AN IDEA?
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 3,
            textTransform: "uppercase",
            color: "#222",
          }}
        >
          Get on a Consultation Call
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            required
            label="Your Name"
            name="name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2 }}
            value={form.name}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            required
            label="Your Email"
            name="email"
            type="email"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2 }}
            value={form.email}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            required
            label="Your Phone No"
            name="phone"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2 }}
            value={form.phone}
            onChange={handleChange}
          />

          <Typography
            sx={{
              mt: 3,
              mb: 1,
              fontSize: "0.9rem",
              color: "#111",
              fontWeight: 600,
            }}
          >
            Which service are you interested in?
          </Typography>

          <FormGroup
            sx={{
              mb: 2,
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              columnGap: 2,
            }}
          >
            {servicesList.map((service, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    size="small"
                    value={service}
                    checked={form.services.includes(service)}
                    onChange={handleServiceChange}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "0.85rem", color: "#222" }}>
                    {service}
                  </Typography>
                }
              />
            ))}
          </FormGroup>

          <TextField
            fullWidth
            label="Your Website / Social Media Link"
            name="website"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 3 }}
            value={form.website}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              backgroundColor: "#2b2b2b",
              color: "#fff",
              borderRadius: 0,
              px: 4,
              py: 1,
              textTransform: "none",
              fontSize: "0.9rem",
              "&:hover": { backgroundColor: "#000" },
            }}
          >
            {loading ? "Sending..." : "Submit"}
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};
