import { ContactFormMessage } from 'wasp/entities';
import { GetMessages, CreateMessage, UpdateMessageStatus } from 'wasp/server/operations';

type UpdateMessageStatusInput = {
  messageId: string;
  status: {
    isRead?: boolean;
    isArchived?: boolean;
    isResolved?: boolean;
    repliedAt?: Date;
  };
};

type CreateMessageInput = {
  name: string;
  email: string;
  message: string;
  phone?: string;
  subject?: string;
  department?: string;
  urgency?: string;
  newsletterOptIn?: boolean;
};

export const getMessages: GetMessages<void, ContactFormMessage[]> = async (_, context) => {
  if (!context.user?.isAdmin) throw new Error('Not authorized');

  return context.entities.ContactFormMessage.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      user: {
        select: {
          email: true,
          username: true,
        },
      },
    },
  });
};

export const createMessage: CreateMessage<CreateMessageInput, ContactFormMessage> = async (
  { name, email, message, phone, subject, department, urgency, newsletterOptIn },
  context
) => {
  try {
    if (!name || !email || !message) {
      throw new Error('Name, email, and message are required.');
    }

    return context.entities.ContactFormMessage.create({
      data: {
        name,
        email,
        message,
        phone: phone?.trim() || null,
        subject: subject?.trim() || null,
        department: department?.trim() || null,
        urgency: urgency?.trim() || null,
        newsletterOptIn: newsletterOptIn ?? false,
        userId: context.user?.id || null,
      },
    });
    
  } catch (error) {
    console.error('Error creating message:', error);
    throw new Error('Unable to create message. Please try again.');
  }
};


export const updateMessageStatus: UpdateMessageStatus<UpdateMessageStatusInput, ContactFormMessage> = async (
  { messageId, status },
  context
) => {
  if (!context.user?.isAdmin) throw new Error('Not authorized');

  return context.entities.ContactFormMessage.update({
    where: { id: messageId },
    data: status,
  }).catch((error) => {
    console.error('Error updating message status:', error);
    throw new Error('Failed to update message status.');
  });
};
