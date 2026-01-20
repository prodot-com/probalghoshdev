import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    query {
      user(login: "prodot-com") {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();

  if (!json.data) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data", details: json },
      { status: 500 }
    );
  }

  const days =
    json.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
      (week: any) =>
        week.contributionDays.map((d: any) => ({
          date: d.date,
          count: d.contributionCount,
        }))
    );

  return NextResponse.json(days);
}
