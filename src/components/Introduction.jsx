import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
       'Welcome to the Renewable Energy Placement Optimizer'
        </p>
        <p className="mt-4">
        Our platform empowers individuals, businesses, and government agencies to 
        make informed decisions about the placement of renewable energy sources such as solar panels and wind turbines.
        </p>
        <p className="mt-4">
        By leveraging advanced machine learning algorithms, we identify the most optimal 
        locations within given boundaries, maximizing energy output and sustainability while minimizing costs and environmental impact.
        </p>
        <p className="mt-4">
        With the Renewable Energy Placement Optimizer, you'll benefit from:
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
             'Accurate predictions of solar and wind energy potential',
             'Customizable parameters to suit your specific needs and goals',
             'Visualizations and reports for easy interpretation and decision-making',
             'Integration with existing energy infrastructure and planning systems',
             'Continuous updates and improvements based on real-world data and feedback',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Ready to harness the power of renewable energy?{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
