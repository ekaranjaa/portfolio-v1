<template>
  <section id="contact" class="relative">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
      <h2 class="mb-2 text-center font-baskervile text-4xl">
        <span>Get In Touch</span>
        <span
          class="mt-2 mx-auto block w-24 h-0.5 bg-gray-800 dark:bg-gray-200"
        ></span>
      </h2>
      <p class="mb-4 text-center font-light">
        Do you have a ✨ PROJECT IDEA ✨ or just want to say HI😊 drop me a
        line!
      </p>
      <div class="mx-auto max-w-sm">
        <div
          class="mb-4 text-center"
          :class="{
            'text-green-500 dark:text-green-500': status === 'success',
            'text-red-500 dark:text-red-500': status === 'error'
          }"
        >
          <p v-if="status === 'success'">Message sent successfully.</p>
          <p v-if="status === 'error'">
            There was a error submitting the form.
          </p>
        </div>
        <form
          autocomplete="off"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          @submit.prevent="submitForm"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div class="mb-4">
            <label for="name" class="block">Name</label>
            <input
              id="name"
              v-model="form.name"
              name="name"
              type="text"
              required
              class="p-2 block w-full border-b dark:bg-gray-800 border-gray-300 dark:border-gray-700 transition focus:border-blue-500 dark:focus:border-red-500 outline-none"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block">Email</label>
            <input
              id="email"
              v-model="form.email"
              name="email"
              type="email"
              required
              class="p-2 block w-full border-b dark:bg-gray-800 border-gray-300 dark:border-gray-700 transition focus:border-blue-500 dark:focus:border-red-500 outline-none"
            />
          </div>
          <div class="mb-4">
            <label for="message" class="block">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              name="message"
              rows="3"
              required
              class="p-2 block w-full border-b dark:bg-gray-800 border-gray-300 dark:border-gray-700 transition focus:border-blue-500 dark:focus:border-red-500 outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            class="mx-auto mt-6 px-6 py-3 block bg-gradient-to-br from-blue-500 to-blue-700 dark:from-red-500 dark:to-red-700 ring-blue-500 dark:ring-red-500 hover:shadow-md focus:shadow-md focus:ring-2 text-white rounded-full transition shadow-xl focus:outline-none"
            :class="{ 'pointer-events-none': busy }"
          >
            <span v-if="busy">Sending...</span>
            <span v-if="!busy">Send</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      status: null,
      busy: false,
      form: {
        name: null,
        email: null,
        message: null
      }
    };
  },
  methods: {
    // encode(data) {
    //   const formData = new FormData();

    //   for (const key of Object.keys(data)) {
    //     formData.append(key, data[key]);
    //   }

    //   return new URLSearchParams(formData).toString();
    // },

    async submitForm() {
      this.status = null;
      this.busy = true;

      // eslint-disable-next-line no-console
      // console.log({
      //   'form-name': 'contact',
      //   ...this.form
      // });

      // eslint-disable-next-line no-console
      // console.log(
      //   this.encode({
      //     'form-name': 'contact',
      //     ...this.form
      //   })
      // );

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: {
          'form-name': 'contact',
          ...this.form
        }
      })
        .then(() => {
          this.status = 'success';
          this.busy = false;

          this.form.name = null;
          this.form.email = null;
          this.form.subject = null;
          this.form.message = null;
        })
        .catch((err) => {
          this.status = 'error';
          this.busy = false;

          // eslint-disable-next-line no-console
          console.error(err);
        });
    }
  }
};
</script>
