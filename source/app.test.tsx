import React from 'react'
import { describe, it, expect } from 'vitest'
import chalk from 'chalk'
import { render } from 'ink-testing-library'
import App from './app.js'

describe('App', () => {
	it('greet unknown user', () => {
		const { lastFrame } = render(<App name={undefined} />)

		expect(lastFrame()).toContain(`Bonjour, ${chalk.green('Stranger')}`)
	})

	it('greet user with a name', () => {
		const { lastFrame } = render(<App name="Jane" />)

		expect(lastFrame()).toContain(`Bonjour, ${chalk.green('Jane')}`)
	})
})
