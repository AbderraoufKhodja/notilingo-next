export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20" data-aos="fade-up">
          {/* Section header */}
          <div className="pb-12">
            <h2 className="h2">FAQs</h2>
          </div>

          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Can I use Notilingo with my iPhone?</h4>
                <p className="text-slate-500">
                  Unfortunately, Notilingo is not available for iOS due to Apple's restrictions on accessing notifications.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Can I filter the notifications are translated by Notilingo?</h4>
                <p className="text-slate-500">
                  <strong>Yes</strong>, you can filter the notifications that are translated by Notilingo. You can choose to translate all notifications or only those from specific apps.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Can I save notifications to my notes app?</h4>
                <p className="text-slate-500">
                  <em>Coming soon</em>, you will be able to save notifications to your notes app. Notilingo will have its own notes feature in the future.
                </p>
              </div>
            </div>

            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Can I access a history of my notifications?</h4>
                <p className="text-slate-500">
                  <em>Coming soon</em>, you will be able to create to-do lists from notifications and set reminders for important tasks.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Can I create to-do lists from notifications?</h4>
                <p className="text-slate-500">
                  <em>Coming soon</em>, you will be able to create to-do lists from notifications and set reminders for important tasks.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">How secure is Notilingo?</h4>
                <p className="text-slate-500">
                Notilingo is designed with user privacy as a top priority, ensuring that your data is securely processed and stored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}