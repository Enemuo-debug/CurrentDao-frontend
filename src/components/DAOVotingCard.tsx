'use client'

import { useState } from 'react'
import { Shield, Users, Clock, CheckCircle } from 'lucide-react'

interface Proposal {
  id: number
  title: string
  description: string
  votesFor: number
  votesAgainst: number
  endTime: string
  status: 'active' | 'passed' | 'rejected'
}

export function DAOVotingCard() {
  const [proposals] = useState<Proposal[]>([
    {
      id: 1,
      title: 'Solar Farm Expansion - Texas',
      description: 'Build new solar array in West Texas to increase energy production by 500MW',
      votesFor: 1247,
      votesAgainst: 89,
      endTime: '2024-02-20T12:00:00Z',
      status: 'active'
    },
    {
      id: 2,
      title: 'Grid Modernization Initiative',
      description: 'Upgrade infrastructure to support renewable energy integration',
      votesFor: 892,
      votesAgainst: 156,
      endTime: '2024-02-18T18:00:00Z',
      status: 'active'
    }
  ])

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
          <Shield className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">DAO Governance</h3>
          <p className="text-sm text-gray-600">Vote on community proposals</p>
        </div>
      </div>

      <div className="space-y-4">
        {proposals.map((proposal) => (
          <div key={proposal.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">{proposal.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{proposal.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{proposal.votesFor + proposal.votesAgainst} votes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Ends: {new Date(proposal.endTime).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                proposal.status === 'active' ? 'bg-green-100 text-green-800' :
                proposal.status === 'passed' ? 'bg-blue-100 text-blue-800' :
                'bg-red-100 text-red-800'
              }`}>
                {proposal.status === 'active' ? 'Active' :
                 proposal.status === 'passed' ? 'Passed' : 'Rejected'}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">For</span>
                <span className="font-semibold text-green-600">{proposal.votesFor}</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100}%` 
                  }}
                />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Against</span>
                <span className="font-semibold text-red-600">{proposal.votesAgainst}</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-red-600 h-2 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${(proposal.votesAgainst / (proposal.votesFor + proposal.votesAgainst)) * 100}%` 
                  }}
                />
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Vote For
              </button>
              <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                Vote Against
              </button>
            </div>
          </div>
        ))}

        <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors">
          Create New Proposal
        </button>
      </div>
    </div>
  )
}
