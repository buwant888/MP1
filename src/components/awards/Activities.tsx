import { activities } from '@/config/projects'
import { Card } from '@/components/shared/Card'
import { Section } from '@/components/layout/Section'

export function Activities() {
  return (
    <Section title="Activities">
      <div className="grid grid-cols-1 gap-4">
        {activities.map((activity, index) => (
          <Card key={index}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{activity.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {activity.description}
              </p>
              {activity.link && (
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Learn more →
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
