import {
    Timeline,
    TimelineContent,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from "@/components/reui/timeline"

export default function Education() {
    return (
        <>
            <Timeline defaultValue={2} className="w-full max-w-md">

                <TimelineItem step={2}>
                    <TimelineHeader>
                        <TimelineTitle>College</TimelineTitle>
                    </TimelineHeader>
                    <TimelineContent>
                        <div className="flex gap-2">
                            <span className="grow">Pagadian Capitol College</span>
                            <span className="text-xs">2022 - 2026</span>
                        </div>
                    </TimelineContent>
                    <TimelineIndicator />
                    <TimelineSeparator />
                </TimelineItem>

                <TimelineItem step={3}>
                    <TimelineHeader>
                        <TimelineTitle>High School</TimelineTitle>
                    </TimelineHeader>
                    <TimelineContent>
                        <div className="flex gap-2">
                            <span className="grow">Saint Andrew's Academy</span>
                            <span className="text-xs">2016 - 2022</span>
                        </div>
                    </TimelineContent>
                    <TimelineIndicator />
                    <TimelineSeparator />
                </TimelineItem>

                <TimelineItem step={4}>
                    <TimelineHeader>
                        <TimelineTitle>Elementary </TimelineTitle>
                    </TimelineHeader>
                    <TimelineContent>
                        <div className="flex gap-2">
                            <span className="grow">San Pablo Elementary School</span>
                            <span className="text-xs">2009 - 2015</span>
                        </div>
                    </TimelineContent>
                    <TimelineIndicator />
                    <TimelineSeparator />
                </TimelineItem>
            </Timeline>
        </>
    )
}